import SettingsIcon from '@material-ui/icons/Settings';
const Budget = () => {
    return (
        <div>
      
          <ul class="nav nav-tabs">
           <a href="/settings"> <SettingsIcon /></a><h3> BUDGET </h3>
            
       
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Budget</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/changeHistory">Change History</a>
            </li>
          </ul>

        </div>
    );
};

export default Budget;