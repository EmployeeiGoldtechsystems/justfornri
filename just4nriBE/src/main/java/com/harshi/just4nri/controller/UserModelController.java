package com.harshi.just4nri.controller;

import com.harshi.just4nri.model.UserModel;
import com.harshi.just4nri.service.UserModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/nri")
@CrossOrigin
public class UserModelController {

    @Autowired
    UserModelService userModelService;

    @GetMapping
    public List<UserModel> getAll() {
        List<UserModel> result = userModelService.findAll();
        result.sort(new Comparator<UserModel>() {
            @Override
            public int compare(UserModel o1, UserModel o2) {
                return o1.getId() > o2.getId() ? 1 : -1;
            }
        });
        return result;
    }

    @PostMapping
    public UserModel save(@RequestBody UserModel userModel) {
        userModel.setCreatedDate(new Date());
        return userModelService.save(userModel);
    }

    @DeleteMapping
    public void delete(@PathVariable Integer id) { userModelService.deleteById(id); }
}

