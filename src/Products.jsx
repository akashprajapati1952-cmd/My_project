import { useState } from 'react'
import Product from './Product.jsx'

function Products() {
  return(
    <div class="flex mx-10 my-20  items-start gap-5 content-start justify-evenly flex-wrap grow overflow-auto">
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_mpTTBwxXQbF5lfDTktp1yHq86V-VKGxC2iQpiSz3w&s=10" name="Gray coffee mug" catagory="mug" rate="₹75"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSeGNwpqK3OgrkZ6ByJqtQ9ylrXfh6McbgqC9N8r6sg&s=10" name="Blue half soldier t-shirt" catagory="t-shirt" rate="₹200"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdI8uxJ1PdPcqZQsL_sB8WruFFB2WWk97w9UdjEJSWw&s=10" name="Black xl t-shirt" catagory="t-shirt" rate="₹175"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenQtlF5UFyWw9VJmgfhWrMX_d8erm6Cldv3CbwJKyQg&s=10" name="Vivo y28e" catagory="mobile" rate="₹12,999"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh-z77h7C3OzvXCHqhd1aJOqf5ISPM5GBNc-dc8s4iw&s=10" name="One plus" catagory="mobile" rate="₹75,000"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFPUxggdDZT9ZxjwNlzh_13tpZWnGKSWOXRrMYTYI5w&s=10" name="Lightgreen gift mug" catagory="mug" rate="₹100"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGV6gdweSSZf5vdDkhT-NP0vhYmFoSEw-bTxDcDjRaKQ&s=10" name="Dumbbells 10kg x 2pcs" catagory="dumbbell" rate="₹1299"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJedmTN0L8aLdtwEWi0-dRETurYmozBjw2UaJJf-3a_JHu8djbsAFnofJ&s=10" name="Fitness dumbbells" catagory="dumbbell" rate="₹699"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj0OqNgRaJG9KLvj0tkWufoJs_jwic43D_a95Mq1qOQ&s=10" name="Ladies hand bag" catagory="bag" rate="₹200"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_mpTTBwxXQbF5lfDTktp1yHq86V-VKGxC2iQpiSz3w&s=10" name="Gray coffee mug" catagory="mug" rate="₹75"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSeGNwpqK3OgrkZ6ByJqtQ9ylrXfh6McbgqC9N8r6sg&s=10" name="Blue half soldier t-shirt" catagory="t-shirt" rate="₹200"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdI8uxJ1PdPcqZQsL_sB8WruFFB2WWk97w9UdjEJSWw&s=10" name="Black xl t-shirt" catagory="t-shirt" rate="₹175"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenQtlF5UFyWw9VJmgfhWrMX_d8erm6Cldv3CbwJKyQg&s=10" name="Vivo y28e" catagory="mobile" rate="₹12,999"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh-z77h7C3OzvXCHqhd1aJOqf5ISPM5GBNc-dc8s4iw&s=10" name="One plus" catagory="mobile" rate="₹75,000"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFPUxggdDZT9ZxjwNlzh_13tpZWnGKSWOXRrMYTYI5w&s=10" name="Lightgreen gift mug" catagory="mug" rate="₹100"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGV6gdweSSZf5vdDkhT-NP0vhYmFoSEw-bTxDcDjRaKQ&s=10" name="Dumbbells 10kg x 2pcs" catagory="dumbbell" rate="₹1299"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJedmTN0L8aLdtwEWi0-dRETurYmozBjw2UaJJf-3a_JHu8djbsAFnofJ&s=10" name="Fitness dumbbells" catagory="dumbbell" rate="₹699"></Product>
      <Product pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj0OqNgRaJG9KLvj0tkWufoJs_jwic43D_a95Mq1qOQ&s=10" name="Ladies hand bag" catagory="bag" rate="₹200"></Product>
    </div>
  );
}
export default Products