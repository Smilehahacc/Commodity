package com.operation;

import com.connect.Commodities;
import com.connect.Power;
import com.connect.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class SqlOperation{

	static SessionFactory sf;
	static Session s;

	static {
		//获取SessionFactory，通过SessionFactory 获取一个Session
		sf = new Configuration().configure().buildSessionFactory();

		//开启Session
		s = sf.openSession();
		//在Session基础上开启一个事务
		s.beginTransaction();
	}

	// 控制会话的开启和关闭
	public void controlSession(boolean b) {
		if(b) {
			s = sf.openSession();
			s.beginTransaction();        //开启一个事务
		}else {
			s.close();
			sf.close();
		}
	}

	/**
	*登录验证（用户名和密码验证）
	*/
	public boolean loginVerify(String username, String password) {
		controlSession(true);
		// 根据hql创建一个Query对象
		Query q =s.createQuery("from User u where u.username like ?");
		// 设置参数(和基1的PreparedStatement不一样，Query是基0的)
		q.setString(0, username);

		// 通过Query对象的list()方法即返回查询结果
		List<User> us= q.list();

		if(!us.isEmpty()&&password.equals(us.get(0).getPassword())) {
			return true;
		}else {
			return false;
		}
	}

	/**
	*用户信息表user-查询方法（用户信息显示）
	*/
	public List selectUser(String username) {
		controlSession(true);
		// 根据hql创建一个Query对象
		Query q =s.createQuery("from User u where u.username like ?");
		// 设置参数(和基1的PreparedStatement不一样，Query是基0的)
		if(username.equals("")) {
			username = "%";
		}
		q.setString(0, username);

		// 通过Query对象的list()方法即返回查询结果
		List<User> us = q.list();
		return us;
	}

	/**
	*	用户信息表user-插入方法（账号注册）
	*/
	public boolean insertUser(String username, String password, String email, String mobile) {

		controlSession(true);
		// 根据hql创建一个Query对象
		Query q =s.createQuery("from User u where u.username like ?");
		// 设置参数(和基1的PreparedStatement不一样，Query是基0的)
		q.setString(0, username);

		// 通过Query对象的list()方法即返回查询结果
		List<User> us= q.list();
		// 想要创建的账号已存在
		if(!us.isEmpty()) {
			return false;
		}
		//不存在则执行插入
		else {
			//实例化实体类对象（使用对象中的方法对数据进行操作）
			User u = new User();
			u.setUsername(username);
			u.setPassword(password);
			u.setEmail(email);
			u.setMobile(mobile);
			u.setPortrait("portrait/20.jpg");
			 //通过调用Session的save方法把对象保存到数据库
			s.save(u);
			//提交事务
			s.getTransaction().commit();
			controlSession(false);
			return true;
		}
	}

	/**
	*用户信息表user-更新方法（修改账号信息）
	*/
	public boolean updateUser(String username, String email, String mobile, String usernameNew) {

			controlSession(true);

			boolean isNewUsername = false;
			// 根据hql创建一个Query对象
			Query q = s.createQuery("from User u where u.username like ?");
			// 设置参数(和基1的PreparedStatement不一样，Query是基0的)
			q.setString(0, username);

			// 通过Query对象的list()方法即返回查询结果
			List<User> us= q.list();

			// 名字不存在，则返回错误
			if(us.isEmpty()) {
				return isNewUsername;
			}
			//	修改个人信息
			if(username.equals(usernameNew)!=true) {
				// 新用户名的修改
				User u = new User();
				u.setEmail(email);
				u.setMobile(mobile);
				u.setUsername(usernameNew);
				u.setPassword(us.get(0).getPassword());
				u.setPower(us.get(0).getPower());
				u.setPortrait(us.get(0).getPortrait());
				//保存新的用户删除旧的
				s.save(u);
				s.delete(us.get(0));
				isNewUsername = true;
			}else {
				us.get(0).setEmail(email);
				us.get(0).setMobile(mobile);
				s.update(us.get(0));
			}
			s.getTransaction().commit();
			controlSession(false);
			return isNewUsername;
		}

	/**
	*用户信息表user-更改密码
	*/
	public boolean updatePassword(String username, String password_old, String password_new) {

			controlSession(true);

			Query q = s.createQuery("from User u where u.username like ?");
			q.setString(0, username);
			List<User> us = q.list();

			if(!us.isEmpty()&&password_old.equals(us.get(0).getPassword())) {

				us.get(0).setPassword(password_new);
				//保存新的用户删除旧的
				s.update(us.get(0));
				s.getTransaction().commit();
				controlSession(false);
				return true;
			}else {
				controlSession(false);
				return false;
			}
	}

	/**
	*用户信息表user-更新方法（验证和修改权限）
	*/
	public boolean updateUserPower(String username, String id) {

			controlSession(true);
			// 查找权限码表，验证是否可以修改权限
			Query q = s.createQuery("from Power p where p.id like ?");
			q.setString(0, id);
			List<Power> p = q.list();

			// 权限码存在，可以进行权限修改
			if(!p.isEmpty()) {
				Query qs = s.createQuery("from User u where u.username like ?");
				qs.setString(0, username);
				List<User> us = qs.list();
				us.get(0).setPower(p.get(0).getPower());
				s.update(us.get(0));
				s.getTransaction().commit();
				controlSession(false);
				return true;
			}
			else {
				controlSession(false);
				return false;
			}

	}

	/**
	*用户信息表portrait-更新方法（修改用户头像）
	*/
	public boolean updateHeadPortrait(String username, String headPortrait) {

			controlSession(true);

			Query q = s.createQuery("from User u where u.username like ?");
			q.setString(0, username);
			List<User> us = q.list();

			if(!us.isEmpty()&&!headPortrait.equals(us.get(0).getPortrait())) {

				us.get(0).setPortrait(headPortrait);
				//保存新的用户删除旧的
				s.update(us.get(0));
				s.getTransaction().commit();
				controlSession(false);
				return true;
			}else {
				controlSession(false);
				return false;
			}

	}


	/**
	*	商品信息表commodities-查询方法（商品信息显示，无条件查询）
	*/
	public List selectCommodities() {
		controlSession(true);
		// 无条件查询，输出表中所有信息
		Query q = s.createQuery("from Commodities c");
		List<Commodities> cs = q.list();
		controlSession(false);
		return cs;
	}

	/**
	*	商品信息表commodities-查询方法（普通查询和高级查询）
	*/
	public List selectCommoditiesXS(String id, String name, String price1, String price2, String kind, String inventory1, String inventory2) {
		controlSession(true);
		// 组合查询，输出表中所有信息,采用拼凑查询语句的方式
		Query q = s.createQuery("from Commodities c where c.id like ? and c.name like ? and c.price > ? and c.price < ? and c.kind like ? and c.inventory > ? and c.inventory < ?");

		if(id != "") {
			q.setString(0, '%'+id+'%');
		}else {
			q.setString(0, "%");
		}

		if(name != "") {
			q.setString(1, '%'+name+'%');
		}else {
			q.setString(1, "%");
		}

		if(price1 != "") {
			q.setString(2, price1);
		}else {
			q.setString(2, "0");
		}

		if(price2 != "") {
			q.setString(3, price2);
		}else {
			q.setString(3, "99999999999");
		}

		if(kind != "") {
			q.setString(4, '%'+kind+'%');
		}else {
			q.setString(4, "%");
		}

		if(inventory1 != "") {
			q.setString(5, inventory1);
		}else {
			q.setString(5, "0");
		}

		if(inventory2 != "") {
			q.setString(6, inventory2);
		}else {
			q.setString(6, "99999999999");
		}

		List<Commodities> cs = q.list();
		controlSession(false);
		return cs;
	}

	/**
	*	商品信息表commodities-插入方法（添加商品信息的进货功能）
	*/
	public boolean insertCommodities(String id, String name, double price, String kind, int inventory) {

		controlSession(true);
		// 查找权限码表，验证是否可以修改权限
		Query q = s.createQuery("from Commodities c where c.id like ?");
		q.setString(0, id);
		List<Commodities> cs = q.list();

		// 插入的数据不存在，则可以插入
		if(cs.isEmpty()) {
			Commodities c = new Commodities();
			c.setId(id);
			c.setName(name);
			c.setPrice(price);
			c.setKind(kind);
			c.setInventory(inventory);
			s.save(c);
			s.getTransaction().commit();
			controlSession(false);
			return true;
		}
		else {
			controlSession(false);
			return false;
		}

	}

	/**
	*商品信息表commodities-更新方法（修改商品库存，进货和出货功能）
	*/
	public boolean updateCommodities(String id, int sellout, int purchase) {
		controlSession(true);

		Query q = s.createQuery("from Commodities c where c.id like ?");
		q.setString(0, id);
		List<Commodities> cs = q.list();
		if(cs.isEmpty()) {
			return false;
		}

		int inventory = cs.get(0).getInventory();
		// 判断库存数量是否足够支持出售
		if(purchase==0&&sellout <= inventory) {
				cs.get(0).setInventory(inventory-sellout);
				s.save(cs.get(0));
				s.getTransaction().commit();
				controlSession(false);
				return true;
		}else if(sellout==0) {
				cs.get(0).setInventory(inventory+purchase);
				s.save(cs.get(0));
				s.getTransaction().commit();
				controlSession(false);
				return true;
		}else {
				return false;
		}
	}

	/**
	*商品信息表commodities-更新方法（修改商品信息）
	*/
	public boolean updateCommoditiesX(String id, String name, double price, String kind, int inventory, String oldId) {

			controlSession(true);
			Query q = s.createQuery("from Commodities c where c.id like ?");
			q.setString(0, oldId);
			List<Commodities> c = q.list();
			Query qs = s.createQuery("from Commodities c where c.id like ?");
			qs.setString(0, id);
			List<Commodities> cc = qs.list();

			// 新的ID重复，返回失败
			if(!cc.isEmpty()&&!id.equals(oldId)) {
				return false;
			}else if(id.equals(oldId)) {
				c.get(0).setName(name);
				c.get(0).setPrice(price);
				c.get(0).setKind(kind);
				c.get(0).setInventory(inventory);
				s.update(c.get(0));
			}else {
				Commodities cs = new Commodities();
				cs.setId(id);
				cs.setName(name);
				cs.setPrice(price);
				cs.setKind(kind);
				cs.setInventory(inventory);
				s.delete(c.get(0));
				s.save(cs);
			}
			s.getTransaction().commit();
			controlSession(false);
			return true;
	}

}
