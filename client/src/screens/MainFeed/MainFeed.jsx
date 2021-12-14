// Packages
import { Link } from 'react-router-dom';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

// Components
import ImageFeed from '../../components/ImageFeed/ImageFeed';

// CSS
import './MainFeed.css'

export default function MainFeed({ posts }) {
  console.log(posts)
  return (
    <div className="main-feed">
      <header className="main-feed-header">
        <h1 className="main-feed-heading">Finstagram</h1>
        <Link to='/create-post'>
          <img src={addIcon} alt='create post icon' />
        </Link>
      </header>

      <ImageFeed posts={posts} />
    </div>
  )
}
