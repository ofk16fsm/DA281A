function ListView(props){
    return (
        <div>
          <table className="listView">
            <thead>
                <tr>
                    {props.headers.map((header, index) => {
                      return (<th key={index}>{header}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
              {props.apiData.map((item, index) => {
                return(<tr key={index}>
                  <td>{item.name === "" ? item.Title : item.name ? item.name : item.Title}</td>
                  <td>{item.artist}</td>
                  <td>{item.Type === "" ? "Music" : item.Type ? item.Type : "Music"}</td>
                </tr>)
              })}          
            </tbody>
            </table>
        </div>  
    )
}

export default ListView