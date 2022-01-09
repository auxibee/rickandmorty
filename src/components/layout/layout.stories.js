
import Layout from './layout';
import styles from './layout.module.css'
export default {
    title: 'Components/layout',
    component: Layout
}

export const MainLayout = () => 
<Layout>
    <section><h1>Title of Hero</h1><p>sub title</p></section>
    <aside>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veniam amet, 
           
    </aside>
    <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veniam amet, repellendus facere ipsam distinctio voluptas inventore neque quae a atque debitis suscipit? Fuga laboriosam laborum sint maiores, aut et?
        Dignissimos laudantium ex commodi corporis, fugit mollitia voluptates ab tempore architecto, veritatis eligendi ullam minima aliquam error vel praesentium in nesciunt delectus doloremque? Magni eum voluptatum officia eaque nemo ipsum?
        Praesentium minus autem porro? Qui omnis eligendi aspernatur, corporis maiores libero, tempore odio eaque in dolores atque, eos ducimus quis ipsam suscipit iusto esse quae. Doloremque, excepturi ex. Qui, molestiae!
        Officia voluptatibus corporis optio nisi sint magni architecto consectetur voluptate porro earum animi ipsum, nostrum doloremque praesentium soluta qui esse. Fuga eaque illo iste voluptate beatae facere vero dolor mollitia.
    </div>
</Layout>