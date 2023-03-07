const rootUrl = 'https://be953ba5-7336-48a4-9d62-5b0837f73ecd.mock.pstmn.io';

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

const postSeries = async (body) => {
  try {
    const res = await fetch(`${rootUrl}/apps/appId1/series`, {
      method: 'GET',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const deleteSeries = async (body) => {
  try {
    const res = await fetch(`${rootUrl}/apps/appId1/series/n4cs9GvFfj`, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export { fetchSeries, postSeries, deleteSeries };
