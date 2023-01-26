import {useState, useEffect} from 'react';
import MaterialTable from 'material-table';


function UserDetails(){

   const [items, getItems] = useState([]);
   const [selectedRows, setSelectedRows] = useState([]);

   useEffect(()=>{
      const item = JSON.parse(localStorage.getItem('logins'))
      if(item){
         getItems(item)
      }
   },[])

  //  const handleDeleteRows = (rowData) => {
    
  //   const updatedData = items.filter(row => !selectedRows.includes(row))
  //   getItems(updatedData)
    
    
  //   delete rowData.tableData;
  //   items.splice(items.indexOf(rowData),1)
  //   localStorage.setItem("logins",items);
  //   console.log(items)
  //  }


 return(
         <MaterialTable
      title="User Details"
      columns={[
        { title: 'First Name', field: 'FirstName' },
        { title: 'Last Name', field: 'LastName' },
        { title: 'Email', field: 'Email'},
          
      ]}
      // onSelectionChange={(rows) => setSelectedRows(rows)}
      // options={{
      //   selection: true
      // }}
      data={items}        
      />
 )
}

export default UserDetails;