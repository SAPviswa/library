namespace my.library;

entity Book {
  key ISBN         : UUID
      @Core.Description: 'International Standard Book No';
      title        : String(100);
      author       : String(100);
      Quantity     : Integer;
      genre        : String(100);
      status       : String enum {
        Available;
        Reserved;
        OnLoan
      };
      loans        : Association to many BookLoan
                       on loans.bookID = $self;
      reservations : Association to many Reservation
                       on reservations.bookID = $self;
}

entity User {
  key username     : String;
      password     : String;
      email        : String;
      fullName     : String;
      address      : String;
      phoneNumber  : String;
      role         : String enum {
        Admin;
        User
      };
      loans        : Association to many BookLoan
                       on loans.ID = username;
      reservations : Association to many Reservation
                       on reservations.ID = username;
}

entity BookLoan {
  key ID         : UUID;
      bookID     : Association to Book;
      userID     : Association to User;
      issueDate  : DateTime;
      dueDate    : DateTime;
      returnDate : Date;
      status     : String enum {
        Active;
        Returned
      };
}

entity Reservation {
  key ID              : UUID;
      bookID          : Association to Book;
      userID          : Association to User;
      reservationDate : DateTime;
      status          : String enum {
        Pending;
        Available
      };
}
