import React, {useState}  from 'react'
// import TableRow from './TableRow'
// import { customerHeaders } from '../../utils/Constant'
import SelectComponent from '../dropdown/Select Component';
// import SelectTableRows from '../SelectTableRows';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import "./table.css"
// import {useContext} from '../context/AppContext'

const Table = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [count,setCount]= useState(0);
  const [perPage, setPerPage] = useState(4);
  var filteredList =[];
  var pageList=[];

  const handleChange =(e) =>{
    setSearchTerm(e.target.value.toLowerCase());
    console.log(searchTerm);
  }

  const handlePerPage=(e) =>{
    if (e.target.value>0){
      setPerPage(e.target.value);
    }else{
      setPerPage(4);
    }
  }

  filteredList = props.values.filter((val)=>{
    const searchVal = Object.values(val);
    // console.log(searchVal);
    if (searchTerm === ''){
        return val
    } 
    else if ( selectedOption === 1 && searchVal[1].toLowerCase().includes(searchTerm)){
        return val
    }
    else if ( selectedOption === 2 && searchVal[2].toLowerCase().includes(searchTerm)){
        return val
    }
    else if ( selectedOption === 3 && searchVal[3].toLowerCase().includes(searchTerm)){
        return val
    }
  })

  const incrementCount = (val) =>{

    if (count <(filteredList.length/perPage-1)){
      setCount(count+val);
    }else{

    }
  }
  const decrementCount = (val) =>{
    if (count >=val){
      setCount(count-val);
    }else{
    }
  }
  
  pageList=filteredList.slice(count,count+perPage)

  return (
    <>
      <div className="table-row" key='search'>
        <input className="width-25" data-testid="search-input" type='text' placeholder='Search...' onChange={handleChange}></input>
        <SelectComponent
        options={props.searchOptions}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"Category"}
        />
      </div>

      <table className="table">
        <thead >
          <tr>
            {console.log(props.values)}
              {props.headers.map((val,index)=>(
                  <th key={index}>{val}</th>
              ))}  
          </tr>
        </thead>

        {/* {console.log('selectedOption',selectedOption)} */}
        {/* {console.log('pageList',pageList)} */}

        {/* <SelectTableRows
          values={pageList}
          searchTerm={searchTerm}
        /> */}
        <tbody>
          {pageList.map((val) => {
              const searchVal = Object.values(val);
              // const searchVal =val;
              return(
                  <tr key={searchVal[0]} onClick={()=>props.handleClick(searchVal[3])}>
                  {searchVal.slice(1,)
                  .map((val, index) => ( 
                    <td key={index}>{val}</td>
                    // console.log(Object.values(props.customer)[0])
                  ))}
                </tr>
              )
              })}
        </tbody>
        {/* {updateCount()} */}
        {/* {console.log({count})} */}
      </table>  

      <div className="page-index" >
          <span className="page-index-item page-previous" data-testid="previous-page" onClick={()=>decrementCount(perPage)}><GrCaretPrevious/></span>
          <span className="page-index-item page-val">{count/perPage+1}</span>
          <span className="page-index-item page-next" data-testid="next-page" onClick={()=>incrementCount(perPage)}><GrCaretNext/></span>
      </div>

      <div className="per-page">
        <input className="per-page-val" type="text" placeholder='4' pattern="^[0-9]$" onChange={handlePerPage}></input>
      </div>
    </>
    
  )
}

export default Table