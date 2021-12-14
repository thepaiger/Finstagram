// Packages
import { Link } from 'react-router-dom';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

// Components
import ImageFeed from '../../components/ImageFeed/ImageFeed';

// CSS
import './SingleUserFeed.css'

export default function SingleUserFeed({ posts }) {
  return (
    <div className="single-user-feed">
      <header className="single-user-feed-header">
        <h1 className="single-user-feed-heading">Finstagram</h1>
        <Link to='/create-post'>
          <img src={addIcon} alt='create post icon' />
        </Link>
      </header>

      <ImageFeed posts={posts} />
    </div>
  )
}
