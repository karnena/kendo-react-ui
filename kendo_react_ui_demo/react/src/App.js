import "@progress/kendo-theme-default/dist/all.css";
import React from 'react'
import BasicGrid from "./components/BasicGrid";


function App() {
  return (
    <div>
      <BasicGrid/>
    </div>
  )
}

export default App





















// // // import { Calendar } from "@progress/kendo-react-dateinputs";
// // // import { process } from "@progress/kendo-data-query";
// // import { Grid, GridColumn } from "@progress/kendo-react-grid";
// // import "./App.css";
// // import product from "./product.json";

// // function App() {
// //   return (
// //     <div className="App">
// //       {/* <Calendar/> */}
// //       <Grid data={product} pageable={true} scrollable={false} sortable={true} style={{height: '400px'}}>
// //         <GridColumn field="ProductName" />
// //         <GridColumn field="UnitPrice" />
// //         <GridColumn field="UnitsInStock" />
// //         <GridColumn field="Discontinued" />
// //       </Grid>
// //     </div>
// //   );
// // }

// // export default App;


// import React, {Component} from 'react';
// import '@progress/kendo-theme-default/dist/all.css';
// import './App.css';
// import categories from './categories.json';
// import product from './product.json';
// import { process } from '@progress/kendo-data-query';
// import { Grid, GridColumn } from '@progress/kendo-react-grid';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
// // import { Window } from '@progress/kendo-react-dialogs';

// class App extends Component {

//   state = {
//     dropdownlistCategory: null,
//     gridDataState: {
//       sort: [
//         { field: "ProductName", dir: "asc" }
//       ],
//       skip: 0,
//       take: 10
//     }
//   }

//   handleDropDownChange = (e) => {
//     let newDataState = { ...this.state.gridDataState }
//     if (e.target.value.CategoryID !== null) {
//       newDataState.filter = {
//         logic: 'and',
//         filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
//       }
//       newDataState.skip = 0
//     } else {
//       newDataState.filter = []
//       newDataState.skip = 0
//     }
//     this.setState({
//       dropdownlistCategory: e.target.value.CategoryID,
//       gridDataState: newDataState
//     });
//   }

//   handleGridDataStateChange = (e) => {
//     this.setState({gridDataState: e.dataState});
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello KendoReact!</h1>
//         <p>
//           <DropDownList
//             data={categories}
//             dataItemKey="CategoryID"
//             textField="CategoryName"
//             defaultItem={{CategoryID: null, CategoryName: "Product categories"}}
//             onChange={this.handleDropDownChange}
//             />
//           &nbsp; Selected category ID: <strong>{this.state.dropdownlistCategory}</strong>
//         </p>

//         <Grid
//           data={process(product, this.state.gridDataState)}
//           pageable={true}
//           sortable={true}
//           {...this.state.gridDataState}
//           onDataStateChange={this.handleGridDataStateChange}
//           style={{ height: "400px" }}>
//           <GridColumn field="ProductName" title="Product Name" />
//           <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
//           <GridColumn field="UnitsInStock" title="Units in Stock" />
//           <GridColumn field="Discontinued" cell={checkboxColumn} />
//         </Grid>
//       </div>
//     );
//   }
// }

// class checkboxColumn extends Component {
//   render() {
//     return (
//         <td>
//           <input type="checkbox" checked={this.props.dataItem[this.props.field]} disabled="disabled" />
//         </td>
//     );
//   }
// }

// export default App;