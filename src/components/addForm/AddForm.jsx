import React, {useMemo} from 'react';
import s from './addForm.module.scss'

const AddForm = ({text, price, changeText, changePrice, handleSubmit, handleCancel}) => {

    const isEdit = useMemo(() => {
        return text && price
    }, [text, price])

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => changeText(e.target.value)}/>
            <input type="text" value={price} onChange={e => changePrice(e.target.value)}/>
            <button type="submit">Save</button>
            { isEdit &&  <button onClick={handleCancel}> Cancel</button>}
        </form>
    );
};

export default AddForm;