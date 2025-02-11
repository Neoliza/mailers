import { useDispatch } from 'react-redux';
import { updateLimit, remove } from '../features/mailers/mailersSlice';

export default function Maildomain(props) {
    const { domain } = { ...props };
    const dispatch = useDispatch();

    const handleClick_setLimit = (editId) => {
        let newlimit;

        const checkEnter = (newlimit) => {
            newlimit = prompt("Укажите новый лимит, пожалуйста:");
            if (isNaN(newlimit)) {
                newlimit = checkEnter(newlimit);
            }
            else newlimit = Number(newlimit);
            return newlimit;
        }
        newlimit = checkEnter(newlimit);
        let limiter = [newlimit, editId];
        dispatch(updateLimit(limiter));
    };

    const handleClick_delete = (deleteId) => {
        let sure = window.confirm("Вы уверены, что хотите удалить домен?");
        if (sure) {
            dispatch(remove(deleteId));
        };
    };

    return <tr>
        <td>{domain['id']}</td>
        <td>{domain['domain']}</td>
        <td>{domain['mailbox_count']}</td>
        <td>{domain['used']}</td>
        <td><button onClick={() => handleClick_setLimit(domain['id'])} className="mailerslist__button">{domain['limit']}</button></td>
        <td><button onClick={() => handleClick_delete(domain['id'])} className="mailerslist__button">Удалить</button></td>
    </tr>
}