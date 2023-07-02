import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Delete from "public/img/delete.png";
import Edit from "public/img/edit.png";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import { notFound } from "next/navigation";

// async function getData(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }

const Single = async ({ params }) => {
  // const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.postImgContainer}>
          <Image
            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.postImg}
          />
        </div>
        <div className={styles.user}>
          <div className={styles.profileImgContainer}>
            <Image
              src="https://images.pexels.com/photos/13155855/pexels-photo-13155855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill={true}
              className={styles.profileImg}
            />
          </div>
          <div className={styles.info}>
            <span>John Doe</span>
            <p>posted 2 days ago </p>
          </div>
          <div className={styles.edit}>
            <Link href={`/write?edit=2`}>
              <div className={styles.modifyImgContainer}>
                <Image
                  src={Edit}
                  alt=""
                  fill={true}
                  className={styles.modifyImg}
                />
              </div>
            </Link>
            <div className={styles.modifyImgContainer}>
              <Image
                src={Delete}
                alt=""
                fill={true}
                className={styles.modifyImg}
              />
            </div>
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>

        <p>
          {"     "}Enim minus quia repellendus, iusto ex possimus et quo
          temporibus sapiente corporis nam. Odit, temporibus! Vel, alias quam
          dicta dolorum est error? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nemo culpa accusamus consectetur quo accusantium
          doloribus at ullam voluptatibus, beatae vitae iure incidunt
          temporibus? Sint nobis iure, accusamus iusto est cupiditate! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur labore
          dolores ipsam saepe, sequi veritatis eaque odit eligendi reiciendis
          aliquid ipsa dicta velit, alias,
          <br />
          <br />
          dignissimos distinctio facere nulla quibusdam? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolore consequuntur totam, maiores
          culpa eveniet unde esse debitis laborum, est vitae dolor dolores
          veritatis? Fugiat, doloribus illo. Doloribus ratione ea laudantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          pariatur neque, ullam labore deserunt ipsum adipisci corporis minus,
          earum facere placeat sunt eveniet nam porro recusandae molestias
          explicabo vitae rem! dignissimos distinctio facere nulla quibusdam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          consequuntur totam, maiores culpa eveniet unde esse debitis laborum,
          est vitae dolor dolores veritatis? Fugiat, doloribus illo. Doloribus
          ratione ea laudantium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem pariatur neque,
          <br />
          <br />
          ullam labore deserunt ipsum adipisci corporis minus, earum facere
          placeat sunt eveniet nam porro recusandae molestias explicabo vitae
          rem! dignissimos distinctio facere nulla quibusdam? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolore consequuntur totam,
          maiores culpa eveniet unde esse debitis laborum, est vitae dolor
          dolores veritatis? Fugiat, doloribus illo. Doloribus ratione ea
          laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem pariatur neque, ullam labore deserunt ipsum adipisci corporis
          minus, earum facere placeat sunt eveniet nam porro recusandae
          molestias explicabo vitae rem! dignissimos distinctio facere nulla
          quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolore consequuntur totam, maiores culpa eveniet unde esse debitis
          laborum, est vitae dolor dolores veritatis? Fugiat, doloribus illo.
          Doloribus ratione ea laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem pariatur neque, ullam labore
          deserunt ipsum adipisci corporis minus, earum facere placeat sunt
          eveniet nam porro recusandae
          <br />
          <br />
          molestias explicabo vitae rem! dignissimos distinctio facere nulla
          quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolore consequuntur totam, maiores culpa eveniet unde esse debitis
          laborum, est vitae dolor dolores veritatis? Fugiat, doloribus illo.
          Doloribus ratione ea laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem pariatur neque, ullam labore
          deserunt ipsum adipisci corporis minus, earum facere placeat sunt
          eveniet nam porro recusandae molestias explicabo vitae rem!
        </p>
      </div>

      <Menu />

      {/* <div className={styles.menu}>m</div> */}
    </div>
  );
};

export default Single;
