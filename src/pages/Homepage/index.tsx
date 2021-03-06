import React from 'react'
import Filter from 'components/Filter'
import useHomepage from './useHomepage'
import classes from './styles.module.scss'
import ProjectReports from 'components/ProjectReports'
import useFilter from 'components/Filter/useFilter'
import ProjectCharts from 'components/ProjectCharts'
import noReportsImage from 'assets/images/no-reports.png'

export default function Homepage() {
  const { projects, gateways, isLoadingProjects, isLoadingGateways } =
    useHomepage()
  const {
    project,
    gateway,
    fromDate,
    toDate,
    onProjectClickHandler,
    onGatewayClickHandler,
    onFromDateClickHandler,
    onToDateClickHandler,
    onGenerateHandler,
    reportsData,
    memoizedFilteredProjects,
    didUserChoose,
  } = useFilter({ projects, gateways })
  const reports = reportsData?.map((report) => ({
    date: report.created,
    gateway: report.gatewayId,
    transactionId: report.paymentId,
    amount: { amount: report.amount, currency: 'USD' },
  }))

  const allProjects: any | [] = memoizedFilteredProjects
    ? Object.values(memoizedFilteredProjects)
    : []
  const getChartData = () => {
    const chartData: any = {}
    allProjects.forEach((projectsArray: any) => {
      projectsArray.forEach((project: any) => {
        if (chartData.hasOwnProperty(project.projectId)) {
          chartData[project.projectId] = {
            ...chartData[project.projectId],
            totalAmount:
              chartData[project.projectId].totalAmount + project.amount,
          }
        } else {
          const foundP = projects.find((p) => p.projectId === project.projectId)
          chartData[project.projectId] = {
            projectName: foundP?.name,
            totalAmount: project.amount,
          }
        }
      })
    })
    return chartData
  }

  const chartData = getChartData()

  let chartDataProp: any = { projectNames: [], projectAmounts: [] }
  if (chartData) {
    const projectNames = Object.keys(chartData).map(
      (k) => chartData[k].totalAmount
    )
    const projectAmounts = Object.keys(chartData).map(
      (k) => chartData[k].projectName
    )
    if (projectNames?.length && projectAmounts?.length) {
      chartDataProp.projectNames = { ...projectNames }
      chartDataProp.projectAmounts = { ...projectAmounts }
    }
  }

  return (
    <div className={classes.homepageContainer}>
      <Filter
        projects={projects}
        gateways={gateways}
        project={project}
        gateway={gateway}
        fromDate={fromDate}
        toDate={toDate}
        onProjectClickHandler={onProjectClickHandler}
        onGatewayClickHandler={onGatewayClickHandler}
        onFromDateClickHandler={onFromDateClickHandler}
        onToDateClickHandler={onToDateClickHandler}
        onGenerateHandler={onGenerateHandler}
        isLoadingProjects={isLoadingProjects}
        isLoadingGateways={isLoadingGateways}
      />
      {project === 'All projects' ? (
        <div className={classes.container}>
          <div className={classes.activeProjects}>
            {allProjects.map((projectInfo: any, i: number) => {
              const projectsDetails = projectInfo.map((p: any) => {
                return {
                  date: p.created,
                  amount: { amount: p.amount, currency: 'USD' },
                  gateway: p.gatewayId,
                  transactionId: p.paymentId,
                }
              })
              return (
                <ProjectReports
                  showToggleButton
                  projectsDetails={projectsDetails}
                  showGateways={true}
                  projectName={chartDataProp?.projectAmounts[i]}
                  key={projectsDetails[0].transactionId}
                />
              )
            })}
          </div>

          <ProjectCharts projects={chartDataProp} />
        </div>
      ) : didUserChoose() ? (
        <ProjectReports
          showToggleButton
          projectsDetails={reports}
          showGateways={true}
          projectName={project}
        />
      ) : (
        <div>
          <div className={classes.imageContainer}>
            <div className={classes.noReportTitle}>No reports</div>
            <p className={classes.noReportsText}>
              Currently you have no data for the reports to be generated. Once
              you start generating traffic through the Balance application the
              reports will be shown.
            </p>
            <img src={noReportsImage} alt="no-reports" />
          </div>
        </div>
      )}
    </div>
  )
}
