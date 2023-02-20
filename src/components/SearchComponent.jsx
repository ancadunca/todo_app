function SearchComponent({searchText, setSearchText}) {
  return (
    <>
      <label>Search: </label>
      <input type="text" 
      value={searchText}
      onChange={(e)=>{
        setSearchText(e.target.value);
      }}
      />
    </>
  );
}

export default SearchComponent;
