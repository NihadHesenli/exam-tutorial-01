import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Helmet } from 'react-helmet-async'
import { DB_URL } from '../../../services/base'
import axios from 'axios'
import { Col, Row } from 'antd'

const AllProducts = () => {

  const [prod , setProd] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  const getProd = async () => {
    try {
      const data = await axios(`${DB_URL}/products`)
      setProd(data.data)
      console.log(prod);
      
    } catch (error) {
      console.log(error);
    }
  }
  const filtered = prod.filter((p) => {
    return p.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
  })

  const sortedProd = filtered.toSorted((a, b) => {
    switch (sort) {
      case 'asc':
        return a.price - b.price
      case 'desc':
        return b.price - a.price
    }
  })

    useEffect(() => {
      getProd()
    }, [])


  return (
    <>
     <Helmet>
            <title>Home</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet> 
          <div className="container">
        <div className={styles['search-bar']}>
          <input type="text" placeholder="Search Here" className="search" onChange={(e) => { setSearch(e.target.value) }} />
          <select name="price" id="sorting" onChange={(e) => { setSort(e.target.value) }}>
            <option value="default">Sort by Price Default</option>
            <option value="asc">Sort by Price ASC</option>
            <option value="desc">Sort by Price Desc</option>
          </select>
        </div>
   <Row gutter={[16, 16]} className={styles['row']}>
      {sortedProd.map((p) => (
        <Col xs={24} sm={12} md={8} key={p.id}>
          <div className={styles['prod-card']}>
            <img src={p.image} alt={p.title} width={222} />
            <h3>{p.title}</h3>
            <h4 style={{ margin: "10px 0px" }}>{p.price}$</h4>
            <p>{p.description}</p>
          </div>
        </Col>
      ))}
    </Row>
     </div>      
    </>
  )
}

export default AllProducts