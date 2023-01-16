import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import styled from 'styled-components';

function App() {
  const [ToDo_List, setToDo_List] = useState([]);
  const [test, setTest] = useState([]);

  function Add_ToDo_List() {
    let temp = test;
    setToDo_List([...ToDo_List, temp]);
    setTest("");
    console.log(ToDo_List);
  }

  function listClick() {

  }

  function ToDo_List_All_Select(){

  }

   function ToDo_List_All_Delect(){

}

  function ToDo_List_Modify() {

  }

  function ToDo_List_Delect(index) {
    let temp = [...ToDo_List];
    temp.splice(index,1);
    setToDo_List(temp);
  }

  return (
    <div>
      <h1> 2023 - 01 - 16 </h1>
      <div className='entire'> 
        <h1 className='ToDo_List'> ToDo List </h1>
        <div className='Add_ToDo_List'>
          <input value = {test} onChange={(e) => {setTest(e.target.value)}} placeholder='일정 추가'/>
          <button onClick={() => {Add_ToDo_List()}}> + </button>
        </div>
      </div>
      <button onClick={ToDo_List_All_Select}> 전체 선택 </button>
      <button onClick={ToDo_List_All_Delect}> 삭제 </button>
      {
        ToDo_List.map((value,index) => {
          return(
            <div>
              <input type="checkbox"/>
              <span><strong>{index+1}.</strong> {value}</span>
              <button> 수정 </button>
              <button onClick={() => {ToDo_List_Delect(index)}}> 삭제 </button>
            </div>
          )
        })
      }
    </div>
  );
}
export default App;



// export default function Sample() {
//   const data = [
//     {id: 0, title: '선택 1'},
//     {id: 1, title: '선택 2'},
//     {id: 2, title: '선택 3'},
//     {id: 3, title: '선택 4'}
//   ];

//   // 체크된 아이템을 담을 배열
//   const [checkItems, setCheckItems] = useState([]);

//   // 체크박스 단일 선택
//   const handleSingleCheck = (checked, id) => {
//     if (checked) {
//       // 단일 선택 시 체크된 아이템을 배열에 추가
//       setCheckItems(prev => [...prev, id]);
//     } else {
//       // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
//       setCheckItems(checkItems.filter((el) => el !== id));
//     }
//   };

//   // 체크박스 전체 선택
//   const handleAllCheck = (checked) => {
//     if(checked) {
//       // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
//       const idArray = [];
//       data.forEach((el) => idArray.push(el.id));
//       setCheckItems(idArray);
//     }
//     else {
//       // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
//       setCheckItems([]);
//     }
//   }

//   return (
//     <StyledTable>
//       <thead>
//         <tr>
//           <th>
//             <input type='checkbox' name='select-all'
//               onChange={(e) => handleAllCheck(e.target.checked)}
//               // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
//               checked={checkItems.length === data.length ? true : false} />
//           </th>
//           <th className='second-row'>목록</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data?.map((data, key) => (
//           <tr key={key}>
//             <td>
//               <input type='checkbox' name={`select-${data.id}`}
//                 onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
//                 // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
//                 checked={checkItems.includes(data.id) ? true : false} />
//             </td>
//             <td className='second-row'>{data.title}</td>
//           </tr>
//         ))}
//       </tbody>
//     </StyledTable>
//   )
// }
// const StyledTable = styled.table`
//   text-align: center;
//   border-collapse: collapse;
//   thead{
//     tr{
//       th{
//         padding: 10px 15px;
//         background-color: #888;
//         color: #fff;
//         font-weight: 700;
//       }
//     }
//   }
//   tbody{
//     tr{
//       td{
//         padding: 7px 15px;
//         border-bottom: 1px solid #eee;
//       }
//     }
//   }
//   .second-row{
//     width: 150px;
//   }
// `;

