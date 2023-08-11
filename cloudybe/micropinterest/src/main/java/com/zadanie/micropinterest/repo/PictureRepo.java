package com.zadanie.micropinterest.repo;

import com.zadanie.micropinterest.Model.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PictureRepo extends JpaRepository<Picture, Long>, CrudRepository<Picture, Long> {
    Picture deletePictureById(long id);

    Picture findPictureById(long id);
}
