import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './app'


function App() {
  return (
    <div className="App">
      <button className="togglebtn"></button>
      <table>
        <tr>
          <th> First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E mail</th>
          <th>12 marks</th>
          <th>10 marks</th>
        </tr>
        <tr>
          <td> pavan</td>
          <td>Kumar</td>
          <td>male  </td>
            <td>pavankumar@gmail.com</td>
            <td>43</td>
            <td>45</td> 
          

        </tr>
        <tr>
          <td> pavani</td>
          <td>Kumaran</td>
          <td>Female  </td>
            <td>pavanikumaran@gmail.com</td>
            <td>63</td>
            <td>75</td> 
          

        </tr>
        <tr>
          <td> yugesh</td>
          <td>Reddy</td>
          <td>male  </td>
            <td>yugeshreddy@gmail.com</td>
            <td>33</td>
            <td>25</td> 
          

        </tr>
        <tr>
          <td> sagar</td>
          <td>bellapagri</td>
          <td>male  </td>
            <td>sagar@gmail.com</td>
            <td>63</td>
            <td>95</td> 
          

        </tr>
        
      </table>
      
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
