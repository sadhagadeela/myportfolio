async function searchMovies(){
  const query = document.getElementById('searchInput').value.trim();
  if(!query) return alert('Movie name type chey');
  const moviesDiv = document.getElementById('movies');
  moviesDiv.innerHTML = '<p>Loading...</p>';
  
  try{
    // Free API - no key needed
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    
    if(data.length==0){moviesDiv.innerHTML='<p>No movies found</p>';return}
    
    moviesDiv.innerHTML = data.map(item=>{
      const show = item.show;
      return `<div class="movie-card">
        <img src="${show.image ? show.image.medium : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="">
        <div class="info">
          <h3>${show.name}</h3>
          <p>⭐ ${show.rating.average || 'N/A'} | ${show.language}</p>
          <p>${show.genres.join(', ')}</p>
        </div>
      </div>`;
    }).join('');
  }catch(err){
    moviesDiv.innerHTML='<p>Error fetching movies</p>';
  }
}
// Default load
searchMovies.call(null);
document.getElementById('searchInput').value='Avengers';
searchMovies();
