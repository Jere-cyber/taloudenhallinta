import styles from './ItemForm.module.scss'

function ItemForm(props) {

  return (
    <form>
    <div className={styles.itemform}>
    <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Kulutyyppi</label>
              <select name='type'>
                <option>Puhelin</option>
                <option>Sähkö</option>
                <option>Vesi</option>
                <option>Vero</option>
              </select>

            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='amount'>Summa</label>
              <input type='number' name='amount' step='0.01' />
            </div>
            <div>
              <label htmlFor='paymentDate'>Maksupäivä</label>
              <input type='date' name='paymentDate' />
            </div>
          </div>
          loput lomakerivit


    </div>
  </form>

  )

}

export default ItemForm
