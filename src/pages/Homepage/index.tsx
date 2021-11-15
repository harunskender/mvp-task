import React from 'react'
import Filter from 'components/Filter'
import useHomepage from './useHomepage'
import classes from './styles.module.scss'
import ProjectReports from 'components/ProjectReports'
import useFilter from 'components/Filter/useFilter'
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
  } = useFilter({ projects, gateways })
  const reports = reportsData?.map((report) => ({
    date: report.created,
    gateway,
    transactionId: report.paymentId,
    amount: { amount: report.amount, currency: 'USD' },
  }))
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
      <ProjectReports
        showToggleButton
        projectsDetails={reports}
        showGateways={true}
      />
    </div>
  )
}

// export interface AmountCurrency {
//   amount: number
//   currency: string
// }

// export interface IProjectDetails {
//   date: string
//   gateway?: string
//   transactionId: string
//   amount: AmountCurrency
// }
