import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [entry, setEntry] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  const handleNameChange = (event)=>{
    const {value} = event.target;
    setEntry(prevState => {
      return {...prevState, firstName: value}
    })
  }
  const handleLnChange = (event)=>{
    const {value} = event.target;
    setEntry(prevState => {
      return {...prevState, lastName: value}
    })
  }
  const handlePhoneChange = (event)=>{
    const {value} = event.target;
    setEntry(prevState => {
      return {...prevState, phone: value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook(entry);
    setEntry({firstName: '', lastName: '', phone:''});
  };
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        placeholder="Coder"
        value={entry.firstName}
        onChange={handleNameChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        placeholder="Byte"
        value={entry.lastName}
        onChange={handleLnChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        placeholder="8885559999"
        value={entry.phone}
        onChange={handlePhoneChange}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({entries}) {
  entries.sort((a,b)=>{
      let aln = a.lastName.toLowerCase(), bln = b.lastName.toLowerCase();
      return aln > bln ? 1 : aln < bln ? -1 : 0;
    });
  const list = entries.map(entry => (
        <tr key={Math.random()}> 
          <td>{entry.firstName}</td>
          <td>{entry.lastName}</td>
          <td>{entry.phone}</td>
        </tr>
    ))
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      {list}
    </table>
  );
}

function Application(props) {
  const [entries, setEntries] = useState([]);
  
  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry]);
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable entries={entries}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);