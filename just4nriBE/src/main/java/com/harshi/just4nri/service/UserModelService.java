package com.harshi.just4nri.service;

import com.harshi.just4nri.model.UserModel;
import com.harshi.just4nri.repo.UserModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserModelService {

    @Autowired
    UserModelRepository userModelRepository;

    public List<UserModel> findAll() { return userModelRepository.findAll(); }

    public UserModel save(UserModel userModel) { return userModelRepository.save(userModel); }

    public void deleteById(Integer id) { userModelRepository.deleteById(id); }
}
