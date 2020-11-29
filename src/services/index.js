const DataSource = {
  fetchItems: async (callback) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        //callback
        callback(data)
      }
    } catch (error) {
      console.log(error)
    }
  },

  postItems: async (body, callback) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
          method: "POST",
          body: JSON.stringify(body),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
          },
        }
      )

      callback(response.ok)
    } catch (error) {
      console.log(error)
    }
  },

  deleteItem: async (id, callback) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
          },
        }
      )
      callback(response.ok)
    } catch (error) {
      console.log(error)
    }
  },
}

export default DataSource
