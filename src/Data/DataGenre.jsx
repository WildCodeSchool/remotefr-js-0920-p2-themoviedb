// import React from 'react';

const ComediesGenre = {
  name: "Comédies, films d'animation",
  movie_genres_ids: [16, 10751, 35],
  tv_genres_ids: [16, 10751, 35],
};
const Cartoons = {
  name: 'dessins animés',
  movie_genres_ids: [],
  tv_genres_ids: [10762],
};

const Horror = {
  name: 'Horreur',
  movie_genres_ids: [27],
  tv_genres_ids: [],
};

const Love = {
  name: 'Amour',
  movie_genres_ids: [10749],
  tv_genres_ids: [],
};

const Thriller = {
  name: 'Policier, suspense',
  movie_genres_ids: [53, 9648, 80],
  tv_genres_ids: [80],
};
const Fantasy = {
  name: 'Fantastique, Science-fiction, Action',
  movie_genres_ids: [878, 14, 12, 28],
  tv_genres_ids: [10765, 12, 10759],
};

const WarHistory = {
  name: 'Guerre, histoire',
  movie_genres_ids: [10752, 36],
  tv_genres_ids: [10768],
};

const Western = {
  name: 'Western',
  movie_genres_ids: [37],
  tv_genres_ids: [37],
};

const DATA_EMOTION_BY_WHO = {
  Family: {
    name: 'En Famille',
    list_genres_name: [ComediesGenre, Cartoons, Fantasy, Western],
  },
  Friends: {
    name: 'Entre amis',
    list_genres_name: [ComediesGenre, Horror, Thriller, Fantasy],
  },
  Couple: {
    name: 'En couple',
    list_genres_name: [Love, Horror, Fantasy, Thriller],
  },
  Alone: {
    name: 'seul',
    list_genres_name: [
      ComediesGenre,
      Love,
      Horror,
      Thriller,
      Fantasy,
      WarHistory,
    ],
  },
};

export default DATA_EMOTION_BY_WHO;
