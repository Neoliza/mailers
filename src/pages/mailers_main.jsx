import { useSelector, useDispatch } from 'react-redux'; 
import { create } from '../features/mailers/mailersSlice.js'; 
import MailDomain from './mailers_main__showcomponent.jsx'; 

export default function MailDomainList() {

    const mailersState = useSelector((state) => state.mailers.value);
    const dispatch = useDispatch();

    const handleClick_add = () => {
        let newdomain = prompt("Укажите новый почтовый домен, пожалуйста:");
        if(newdomain) dispatch(create(newdomain));
        else handleClick_add();
    };

    return <div className="mailerslist">
        <button onClick={() => handleClick_add()} className="mailerslist__button">Добавить новый домен</button>
        <table className="mailerslist__table">
            <thead>
                <tr>
                    <td>ID</td> 
                    <td>Domain</td>
                    <td>Mailboxes</td>
                    <td>Used</td>
                    <td>Limit</td>
                    <td>Options</td>
                </tr>
            </thead>
            <tbody> {mailersState.map(item => <MailDomain domain={item}/>)}
            </tbody>
        </table>
    </div>;
}