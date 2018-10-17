import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

    let totalPages = Math.ceil(totalItems / pageSize);

    //ensure that this do not fall out of bounds
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;

    } else {
    	//if more than 10 pages
      if (currentPage <= 6) {
      	startPage = 1;
      	endPage = 10;

      } else if (currentPage + 4 >= totalPages){
        startPage = totalPages - 9;
        endPage = totalPages;

      } else {
      	startPage = currentPage - 5;
      	endPage = currentPage + 4;
      }
    }

    //Calculate start and end index items
    let startIndex = (currentPage - 1)* pageSize;
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItems -1));

    //Create an array of pages
    let pages = Array.from(Array((endPage - 1) - startPage).keys()).map(i => startPage + 1);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endePage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages

    }
  }
}
