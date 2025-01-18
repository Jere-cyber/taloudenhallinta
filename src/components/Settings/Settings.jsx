import styles from './Settings.module.scss'

function Settings(props) {

  return (
    <div className={styles.Settings}>
      <h2>Asetukset</h2>
      <h3>kulutyypit</h3>
      <div className={styles.Settings}>
        { props.typelist.map(
          type=> <div key={type}>{type}</div>
        )}
    </div>
    </div>
  )
}

export default Settings
