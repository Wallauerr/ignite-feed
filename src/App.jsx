import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/79984765?v=4',
      name: 'Vinícius Wallauer',
      role: 'Front-end developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev!' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, iusto? Enim animi accusamus ducimus aliquam iure laborum sed, cum nulla ullam tenetur commodi possimus dolor asperiores error repudiandae id libero.'},
      { type: 'link', content: 'wallauer@protonmail.com' },
    ],
    publishedAt: new Date('2023-11-17 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/57538059?v=4',
      name: 'Lucas Pope',
      role: 'Full-stack developer',
    },
    content: [
      { type: 'paragraph', content: 'Eai dev!' },
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa placeat corrupti blanditiis corporis sapiente molestias reiciendis praesentium impedit, odio dolor nostrum maiores cumque, quidem atque laudantium possimus unde accusantium velit?'},
      { type: 'link', content: 'Ipopedev@proton.me' },
    ],
    publishedAt: new Date('2023-11-19 13:50:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className="2xl:max-w-6xl 2xl:grid-cols-4 xl:max-w-6xl xl:grid-cols-4 lg:max-w-6xl lg:grid-cols-4 md:max-w-none md:grid-cols-1 sm:max-w-none sm:grid-cols-1 my-8 mx-auto px-4 grid gap-8 items-start">
        <Sidebar />
        <main className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 flex flex-col gap-y-8">
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}