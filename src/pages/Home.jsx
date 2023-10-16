import React from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'
import Card from '../component/Card'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export const Home = () => {

  return (
    <>
      <div className='mainsection'>
        <div className='imagesection'>
          <div className='überschrift'>
            <h2 className='under'><Typewriter
              options={{
                strings: ['Welcome to my Portfolio', '{ I m DiegoDev }'],
                autoStart: true,
                loop: true,
              }}
            /></h2>
            <a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='black' size='50px' />
            </a>
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
              <AiFillLinkedin size='50px' color='black' />
            </a>
          </div>
        </div>
      </div >

      <main className='main'>
        <div className='main-container'>
          <h2 className='end-header'>Hey there 👋 </h2>
          <Card />
        </div>
<div className='text-section'>
  <h2>Experience</h2>
</div>

        <div className='texto'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum eius, excepturi nemo dolor, inventore aspernatur unde iste quaerat adipisci veritatis ullam reiciendis nihil quam quibusdam odit, distinctio neque esse architecto recusandae quae dolorem? Vero dolor error id nisi reprehenderit, illum minima! Similique odio iure assumenda doloremque suscipit neque itaque? Nemo rem blanditiis veritatis, laboriosam numquam vitae officiis maiores, officia, repellendus nesciunt soluta ducimus est eaque. Qui numquam quidem nisi, ratione aut hic a? Cupiditate quod doloribus modi nobis architecto magnam hic. Quis dolorem fugiat dolor adipisci, neque, accusamus architecto iusto odio rerum ratione molestiae nobis perferendis! Quia, placea
        <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam tempore neque, repellat commodi ut. Molestias delectus exercitationem, quod commodi optio cum. Necessitatibus natus fuga ipsum repudiandae ratione obcaecati maxime consequatur accusamus! Temporibus cum blanditiis magnam quidem, voluptatum vero aspernatur minus qui ex pariatur et provident porro consectetur quos atque iste soluta laudantium sapiente. Officiis dolores minus beatae provident dignissimos quasi iure illum, nostrum accusantium asperiores et quia excepturi totam molestiae sapiente magni quae similique voluptates aperiam officia consequatur, quibusdam quisquam? Dicta, corrupti rem iure modi quam cum odio, nihil alias commodi itaque repudiandae quaerat maiores ducimus. Impedit quo accusamus, non ut nulla debitis id nisi tempore adipisci expedita cum aperiam quis, mollitia exercitationem. Consectetur, rerum doloremque. Exercitationem harum quae, officia, fuga adipisci cupiditate excepturi eligendi totam sapiente sunt at cum vero magni obcaecati facere quos ex necessitatibus? Fuga aliquam iusto adipisci molestias sunt, magnam ipsam ad eum, ex veritatis quidem officiis repellendus voluptate? Dolores expedita, laudantium dolore necessitatibus ducimus natus iusto est, repudiandae molestiae nulla debitis voluptates nobis quidem iste. Numquam quod ea ex? Omnis reiciendis quae, autem dolorem nam tenetur delectus aliquam nesciunt impedit voluptatibus. Et tenetur tempora ea, cupiditate, odio fugiat dolorem necessitatibus quia expedita explicabo provident?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam tempore neque, repellat commodi ut. Molestias delectus exercitationem, quod commodi optio cum. Necessitatibus natus fuga ipsum repudiandae ratione obcaecati maxime consequatur accusamus! Temporibus cum blanditiis magnam quidem, voluptatum vero aspernatur minus qui ex pariatur et provident porro consectetur quos atque iste soluta laudantium sapiente. Officiis dolores minus beatae provident dignissimos quasi iure illum, nostrum accusantium asperiores et quia excepturi totam molestiae sapiente magni quae similique voluptates aperiam officia consequatur, quibusdam quisquam? Dicta, corrupti rem iure modi quam cum odio, nihil alias commodi itaque repudiandae quaerat maiores ducimus. Impedit quo accusamus, non ut nulla debitis id nisi tempore adipisci expedita cum aperiam quis, mollitia exercitationem. Consectetur, rerum doloremque. Exercitationem harum quae, officia, fuga adipisci cupiditate excepturi eligendi totam sapiente sunt at cum vero magni obcaecati facere quos ex necessitatibus? Fuga aliquam iusto adipisci molestias sunt, magnam ipsam ad eum, ex veritatis quidem officiis repellendus voluptate? Dolores expedita, laudantium dolore necessitatibus ducimus natus iusto est, repudiandae molestiae nulla debitis voluptates nobis quidem iste. Numquam quod ea ex? Omnis reiciendis quae, autem dolorem nam tenetur delectus aliquam nesciunt impedit voluptatibus. Et tenetur tempora ea, cupiditate, odio fugiat dolorem necessitatibus quia expedita explicabo provident?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum eius, excepturi nemo dolor, inventore aspernatur unde iste quaerat adipisci veritatis ullam reiciendis nihil quam quibusdam odit, distinctio neque esse architecto recusandae quae dolorem? Vero dolor error id nisi reprehenderit, illum minima! Similique odio iure assumenda doloremque suscipit neque itaque? Nemo rem blanditiis veritatis, laboriosam numquam vitae officiis maiores, officia, repellendus nesciunt soluta ducimus est eaque. Qui numquam quidem nisi, ratione aut hic a? Cupiditate quod doloribus modi nobis architecto magnam hic. Quis dolorem fugiat dolor adipisci, neque, accusamus architecto iusto odio rerum ratione molestiae nobis perferendis! Quia, placea
        <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam tempore neque, repellat commodi ut. Molestias delectus exercitationem, quod commodi optio cum. Necessitatibus natus fuga ipsum repudiandae ratione obcaecati maxime consequatur accusamus! Temporibus cum blanditiis magnam quidem, voluptatum vero aspernatur minus qui ex pariatur et provident porro consectetur quos atque iste soluta laudantium sapiente. Officiis dolores minus beatae provident dignissimos quasi iure illum, nostrum accusantium asperiores et quia excepturi totam molestiae sapiente magni quae similique voluptates aperiam officia consequatur, quibusdam quisquam? Dicta, corrupti rem iure modi quam cum odio, nihil alias commodi itaque repudiandae quaerat maiores ducimus. Impedit quo accusamus, non ut nulla debitis id nisi tempore adipisci expedita cum aperiam quis, mollitia exercitationem. Consectetur, rerum doloremque. Exercitationem harum quae, officia, fuga adipisci cupiditate excepturi eligendi totam sapiente sunt at cum vero magni obcaecati facere quos ex necessitatibus? Fuga aliquam iusto adipisci molestias sunt, magnam ipsam ad eum, ex veritatis quidem officiis repellendus voluptate? Dolores expedita, laudantium dolore necessitatibus ducimus natus iusto est, repudiandae molestiae nulla debitis voluptates nobis quidem iste. Numquam quod ea ex? Omnis reiciendis quae, autem dolorem nam tenetur delectus aliquam nesciunt impedit voluptatibus. Et tenetur tempora ea, cupiditate, odio fugiat dolorem necessitatibus quia expedita explicabo provident?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam tempore neque, repellat commodi ut. Molestias delectus exercitationem, quod commodi optio cum. Necessitatibus natus fuga ipsum repudiandae ratione obcaecati maxime consequatur accusamus! Temporibus cum blanditiis magnam quidem, voluptatum vero aspernatur minus qui ex pariatur et provident porro consectetur quos atque iste soluta laudantium sapiente. Officiis dolores minus beatae provident dignissimos quasi iure illum, nostrum accusantium asperiores et quia excepturi totam molestiae sapiente magni quae similique voluptates aperiam officia consequatur, quibusdam quisquam? Dicta, corrupti rem iure modi quam cum odio, nihil alias commodi itaque repudiandae quaerat maiores ducimus. Impedit quo accusamus, non ut nulla debitis id nisi tempore adipisci expedita cum aperiam quis, mollitia exercitationem. Consectetur, rerum doloremque. Exercitationem harum quae, officia, fuga adipisci cupiditate excepturi eligendi totam sapiente sunt at cum vero magni obcaecati facere quos ex necessitatibus? Fuga aliquam iusto adipisci molestias sunt, magnam ipsam ad eum, ex veritatis quidem officiis repellendus voluptate? Dolores expedita, laudantium dolore necessitatibus ducimus natus iusto est, repudiandae molestiae nulla debitis voluptates nobis quidem iste. Numquam quod ea ex? Omnis reiciendis quae, autem dolorem nam tenetur delectus aliquam nesciunt impedit voluptatibus. Et tenetur tempora ea, cupiditate, odio fugiat dolorem necessitatibus quia expedita explicabo provident?
          </p>
        </div>
      </main>

    </>
  )
}
