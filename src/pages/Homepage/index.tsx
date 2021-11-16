import React from 'react'
import Filter from 'components/Filter'
import useHomepage from './useHomepage'
import classes from './styles.module.scss'
import ProjectReports from 'components/ProjectReports'
import useFilter from 'components/Filter/useFilter'
import ProjectCharts from 'components/ProjectCharts'
import { IReportsData } from 'models/project'
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
  // const allReports;
  const reports = reportsData?.map((report) => ({
    date: report.created,
    gateway,
    transactionId: report.paymentId,
    amount: { amount: report.amount, currency: 'USD' },
  }))

  const allProjects: any | [] = memoizedFilteredProjects
    ? Object.values(memoizedFilteredProjects)
    : []

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
        <div>
          <div
            className={classes.activeFilters}
          >{`${project} | ${gateway}`}</div>
          {allProjects.map((projectInfo: any) => {
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
                projectName={project}
              />
            )
          })}
        </div>
      ) : (
        <div>NIJE</div>
      )}
      {/* <ProjectCharts /> */}
    </div>
  )
}
// amount: 1779.41
// created: "2021-07-22"
// gatewayId: "i6ssp"
// modified: "2021-03-01"
// paymentId: "6149cf5632f0bb5b47d428e8"
// projectId: "ERdPQ"
// userIds: ['rahej']

// interface ProjectProps {
//   projectNames: string[]
//   projectAmounts: number[]
// }

// interface ProjectChartsProps {
//   projects: ProjectProps
// }
