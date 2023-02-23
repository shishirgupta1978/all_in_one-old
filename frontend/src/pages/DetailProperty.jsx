import React from 'react'
import { useParams } from 'react-router-dom';

const DetailProperty = () => {
    const { slug } = useParams();
  return (
    <div>
      {slug}'s View
    </div>
  )
}

export default DetailProperty;
