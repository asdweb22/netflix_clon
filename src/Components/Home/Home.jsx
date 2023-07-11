import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

// https://api.themoviedb.org/3/movie/upcoming?api_key=dd94604f5b1ff8f7503a43b6ef7b609a&language=en-US&page=1
const url = "https://api.themoviedb.org/3";
const api_key = "dd94604f5b1ff8f7503a43b6ef7b609a";

const upcoming = "upcoming";
const popular = "popular";
const now_playing = "now_playing";
const top_rated = "top_rated";

const imageurl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
    },
  ],
}) => (
  <div className="row">
    <h3>{title}</h3>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imageurl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

export default function Home() {
  const [upcomingMovie, setUpcomingMovie] = useState();
  const [popularMovie, setPopularMovie] = useState();
  const [now_playingMovie, setNow_playingMovie] = useState();
  const [top_ratedMovie, settop_ratedMovie] = useState();

  useEffect(() => {
    //upcoming movies
    const fetchUpcoming = async () => {
      const { data } = await axios.get(
        `${url}/movie/${upcoming}?api_key=${api_key}`
      );
      console.log(data.results);
      setUpcomingMovie(data.results);
    };

    //popular movies
    const fetchPopular = async () => {
      const { data } = await axios.get(
        `${url}/movie/${popular}?api_key=${api_key}`
      );
      console.log(data.results);
      setPopularMovie(data.results);
    };

    //now_playing
    const fetchNow_playing = async () => {
      const { data } = await axios.get(
        `${url}/movie/${now_playing}?api_key=${api_key}`
      );
      console.log(data.results);
      setNow_playingMovie(data.results);
    };

    //top_rated movies
    const fetchtop_rated = async () => {
      const { data } = await axios.get(
        `${url}/movie/${top_rated}?api_key=${api_key}`
      );
      console.log(data.results);
      settop_ratedMovie(data.results);
    };

    fetchUpcoming();
    fetchPopular();
    fetchNow_playing();
    fetchtop_rated();
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <h1>Netflix Clone App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          obcaecati quos adipisci cupiditate labore, cumque soluta commodi
          mollitia, minus molestiae alias itaque, beatae possimus! Eveniet illum
          ducimus harum accusantium eligendi.
        </p>
      </div>
      <Row title="Upcoming movies on Netflix" arr={upcomingMovie} />
      <Row title="Popular movies on Netflix" arr={popularMovie} />
      <Row title="Now Playing movies on Netflix" arr={now_playingMovie} />
      <Row title="Top Rated movies on Netflix" arr={top_ratedMovie} />
    </section>
  );
}
