using my.library as my from '../db/data-model';
@path: '/Central-library'
service CatalogService {
    entity Book as projection on my.Book;
    entity User as projection on my.User;
    entity BookLoan as projection on my.BookLoan;
    entity Reservation as projection on my.Reservation;
}
