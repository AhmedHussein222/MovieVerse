<div className="col-md-4 col-lg-3 mb-4" key={movie.id}>
              <div className="card h-100 shadow">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
                  className="card-img-top"
                  alt={movie.title || "No Image Available"}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text small text-muted">
                    {movie.overview.length > 100 ? `${movie.overview.substring(0, 150)}...` : movie.overview}
                  </p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-primary" onClick={() => navigate(`/details/${movie.id}`)}>
                    Details
                  </button>
                  <button
                    className="btn"
                    onClick={() => dispatch(toggleFavorite(movie))}
                    style={{
                      color: favorites.includes(movie.id) ? "red" : "gray",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  >
                    <i className={`bi ${favorites.find((item) => item.id === movie.id) ? "bi-heart-fill text-danger" : "bi-heart"}`} style={{ fontSize: "1.5rem" }}></i>
                  </button>
                </div>
              </div>
            </div>