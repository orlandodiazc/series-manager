// const rootUrl = 'https://be953ba5-7336-48a4-9d62-5b0837f73ecd.mock.pstmn.io';
// const rootUrl = 'https://corsanywhere.herokuapp.com/https://series-api.fly.dev';
const rootUrl = 'https://series-api.fly.dev';

const fetchSeries = async () => {
  try {
    const res = await fetch(`${rootUrl}/apps/appId1/series`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const postSeries = async (seriesInfo) => {
  try {
    const res = await fetch(`${rootUrl}/apps/appId1/series`, {
      method: 'POST',
      body: JSON.stringify(seriesInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const deleteSeries = async (body) => {
  try {
    const res = await fetch(`${rootUrl}/apps/appId1/series/${body.data.item_id}`, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export { fetchSeries, postSeries, deleteSeries };
