const MovieCard = (props)=>{
    const{adult,backdrop_path,first_air_date,genre_ids,id,media_type,name,origin_country,original_language,original_name,overview,popularity,poster_path,vote_average,vote_count,original_title,release_date} = props.data;
    let imagePath = backdrop_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${backdrop_path}`:"https://cdn1.vectorstock.com/i/1000x1000/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg";


    return (
        <div className="card"> 
        <img src={imagePath} className="background-image" />
        <div className="text-box">
            <p>{name || original_title}</p> 
            <p>{first_air_date || release_date}</p>

        </div>

        </div>
    )
}
export default MovieCard;