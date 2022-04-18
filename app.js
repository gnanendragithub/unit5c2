import './App';
const data=[
    {First_Name:"pavan",Last_Name:"Kumar",gender:"male",email:"pavankumar@gmail.com",marks: 43,marks: 45},
    {First_Name:"pavani",Last_Name:"Kumaran",gender:"Female",email:"pavanikumaran@gmail.com",marks: 63,marks: 75},
    {First_Name:"yugesh",Last_Name:"Reddy",gender:"male",email:"yugeshReddy@gmail.com",marks: 33,marks: 25},
    {First_Name:"sagar",Last_Name:"bellappagari",gender:"male",email:"sagar@gmail.com",marks: 63,marks: 95},


]
function App(){
    return(
        <div className='App'>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>12 marks</th>
                    <th>10 marks</th>
                </tr>
                
                    {data.map((val,key) =>{
                        return(
                            <tr key={key}>
                                <td>{val.First_Name}</td>
                                <td>{val.Last_Name}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.marks}</td>
                                <td>{val.marks}</td>
                                </tr>


                        )
                    })}
                
            </table>
        </div>
    );
}
export default App;