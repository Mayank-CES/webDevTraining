import React, {useState}  from 'react'
import TableRow from './TableRow'
import { customerHeaders } from '../utils/Constant'
import SelectComponent from './Select Component';
import SelectTableRows from './SelectTableRows';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
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
    <div className="table">
      <div className="table-head">
        {console.log(props.values)}
          {props.headers.map((val,index)=>(
              <b className="table-column" key={index}>{val}</b>
          ))}
          
      </div>

      {/* <div className="table-row">
          {props.headers.map((val)=>(
            <div className="table-column">
              <input type='text' placeholder='Search...' onChange={handleChange}></input>
            </div>
          ))}
      </div> */}

      <div className="table-row" key='search'>
        <input className="width-25" type='text' placeholder='Search...' onChange={handleChange}></input>
        <SelectComponent
        options={props.searchOptions}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"Category"}
        />
      </div>

      {console.log(selectedOption)}
      {/* const searchRange=props.values; */}
      {console.log("Initial ",props.values)}

      {console.log("Filter ",count,count+perPage,pageList)}

      <SelectTableRows
        values={pageList}
        searchTerm={searchTerm}
      />

      <div className="page-index" >
        <span className="page-index-item page-previous" onClick={()=>decrementCount(perPage)}><GrCaretPrevious/></span>
        <span className="page-index-item page-val">{count/perPage+1}</span>
        <span className="page-index-item page-next"  onClick={()=>incrementCount(perPage)}><GrCaretNext/></span>
      </div>

      <div className="per-page">
        <input className="per-page-val" type="text" placeholder='4' pattern="^[0-9]$" onChange={handlePerPage}></input>
      </div>

      {/* {updateCount()} */}
      {/* {console.log({count})} */}
    </div>  
  )
}

export default Table