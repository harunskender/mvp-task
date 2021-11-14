import { IProjectDetails } from 'models/project'
import classes from './styles.module.scss'

interface IProjectDataTable {
  projectData: IProjectDetails[]
  showGateways?: boolean
}

export default function ProjectDataTable({
  projectData,
  showGateways = false,
}: IProjectDataTable) {
  console.warn(classes)
  return (
    <table className={classes.table}>
      <tr>
        <th>Date</th>
        {showGateways && <th>Gateway</th>}
        <th>TransactionID</th>
        <th>Amount</th>
      </tr>
      {projectData.map((data, i) => (
        <tr key={`${data.date}_${i}`}>
          <td>{data.date}</td>
          {showGateways && <td>{data.gateway}</td>}
          <td>{data.transactionId}</td>
          <td>{`${data.amount.amount} ${data.amount.currency}`}</td>
        </tr>
      ))}
    </table>
  )
}
