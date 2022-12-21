import ReactPaginate from 'react-paginate';

export const Pagination = ( {countPage, setPages, page} ) => {
    return (
        <div>
            <ReactPaginate
            className='pagination justify-content-center align-items-center my-4 gap-2 text-warning'
            pageCount={countPage}
            forcePage={page === 1 ? 0 : page -1}
            previousLabel="<<"
            nextLabel=">>"
            previousLinkClassName="btn btn-info"
            nextLinkClassName="btn btn-info"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data) => setPages(data.selected + 1)}
            /> 
        </div>
        )
    }
    