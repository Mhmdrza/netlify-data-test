import React from 'react'
import PropTypes from 'prop-types'
import { ProductTemplate } from '../../pages/products/product-template'

const ProductTemplatePreview = ({ entry, widgetFor }) => (
  <ProductTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProductTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductTemplatePreview
