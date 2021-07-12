import primeContractsIcon from "../../../assets/FM/prime-contract.svg";
//import Sidebar from "../sidebar";

const PrimeContracts = () => {

    return (
        <div>
       <h3> PRIME CONTRACT </h3><hr/>
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">General</a>
            </li>
          </ul><br />
         
          <a href="/create-prime-contracts" className="btn btn-outline-primary"> New Prime Contract</a>
<p style={{textAlign:"center"}}>
<img src={primeContractsIcon} alt="" width="50"/><br />
There is no Prime Contract set up.<br />
This is used to manage your contract with your client and keep track of change orders and related items to that contract.</p>
        </div>
    );


}

export default PrimeContracts;