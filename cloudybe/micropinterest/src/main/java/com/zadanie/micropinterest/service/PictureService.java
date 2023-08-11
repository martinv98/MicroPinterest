package com.zadanie.micropinterest.service;

import com.zadanie.micropinterest.Model.Picture;
import com.zadanie.micropinterest.repo.PictureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class PictureService {
    private final PictureRepo pictureRepo;

    @Autowired
    public PictureService(PictureRepo pictureRepo) {
        this.pictureRepo = pictureRepo;
    }

    public Picture addPicture(Picture pic){
        return pictureRepo.save(pic);
    }

    public Picture updatePicture(Picture pic){
        return pictureRepo.save(pic);
    }

    public List<Picture> findAllPictures(){
        return pictureRepo.findAll();
    }

    public void deletePictureById(long id){
        pictureRepo.deleteById(id);
    }

    public Picture getPictureById(long id){
        return pictureRepo.findPictureById(id);
    }
}
