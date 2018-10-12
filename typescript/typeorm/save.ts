import {
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  isActive: boolean

  @OneToMany(type => Post, posts => posts.user, { cascade: ['update', 'insert' ], })
  posts: Post[];
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @ManyToOne(type => User, user => user.posts )
  user: User;
}

const entities = [
  User,
  Post
]

const newConnection = async () => {
  const con = await createConnection({
    host: 'localhost',
    type: 'mysql',
    username: 'root',
    password: 'root',
    database: 'typeorm_test',
    entities,
    synchronize: true,
    logging: ['error', 'query'],
  })

  return con
}

const newPost = () => {
  const post = new Post()
  post.title = 'First Post Ever'
  post.content = '... where do i start?'
  return post
}

const run = async () => {

  const user = new User()
  user.firstName = 'uldis'
  user.lastName = 'sturms'
  user.isActive = true

  user.posts = (new Array(1000).fill(1)).map(() => newPost())

  const con = await newConnection()
  await con.getRepository(User).save(user)

  await con.manager.remove(user.posts)
  await con.getRepository(User).delete(user.id)

  await con.close()
}

run()
