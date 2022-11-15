
export default function Search(props){
  const {user_filter} =props;
  function search(){
    const searchBar = document.querySelector(".search input"),
    searchIcon = document.querySelector(".search button");
    searchBar.classList.toggle("show");
    searchIcon.classList.toggle("active");
    searchBar.focus();
    if(searchBar.classList.contains("active")){
      searchBar.value = "";
      searchBar.classList.remove("active");
    }
  }
  const filter_user = (e)=>{
    user_filter(e.target.value)
  }
    return(
        <div className="search">
        <span className="text">Select an user to start chat</span>
        <input onChange={filter_user} type="text" placeholder="Enter name to search..."/>
        <button onClick={search}><i className="fas fa-search"></i></button>
      </div>
    )
}