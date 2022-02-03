import { useState, useEffect, useRef } from 'react'
import { useFetch } from './useFetch'
import './index.css'
import Follower from './Follower'


function ShopFrontApp() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  const [search, setSearch] = useState(``);
  const mounted = useRef(false)

  useEffect(() => {
    if (loading) return
      // maybe change this
      setFollowers(data[page]);

  }, [loading, page]);

  useEffect(()=>{
    if (!mounted.current){
      mounted.current = true
      return
    }
    console.log()
  },[]);
    
  const firstPage = () => {
    setPage((oldPage) => {
      let firstPage = oldPage 
      if (firstPage = data.length ) {
        firstPage = 0
      }
      return firstPage
    })
  }
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }
  const lastPage = () => {
    setPage(() => {
      let lastPage = data.length-1
      return lastPage
    })
  }
  const handlePage = (index) => {
    setPage(index)
  }
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <main>
      <section className='followers'>
        <form>
          <input 
            type='text' 
            placeholder='Search' 
            className="mb-3 px-3 py-2"
            onChange={handleSearch}
          />
        </form>
        <div className='container'>

          {loading ? 'Loading...' : ''} 
          {followers
            .filter(follower => follower.login.toLowerCase().includes(search.toLowerCase()))
            .map((follower, index) => {
              return <Follower key={index} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={firstPage}>
              first
            </button>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            }).slice(0,3)}
            <span>...</span>
              {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            }).slice(-3, )}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
             <button className='next-btn' onClick={lastPage}>
              last
            </button>
            
          </div>
        )}
      </section>
    </main>
  )
}

export default ShopFrontApp