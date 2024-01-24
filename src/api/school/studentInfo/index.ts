import request from '@/config/axios'

export interface StudentInfoVO {
  id: number
  stuName: string
  stuAge: string
}

// 查询学生信息列表
export const getStudentInfoPage = async (params) => {
  return await request.get({ url: `/school/student-info/page`, params })
}

// 查询学生信息详情
export const getStudentInfo = async (id: number) => {
  return await request.get({ url: `/school/student-info/get?id=` + id })
}

// 新增学生信息
export const createStudentInfo = async (data: StudentInfoVO) => {
  return await request.post({ url: `/school/student-info/create`, data })
}

// 修改学生信息
export const updateStudentInfo = async (data: StudentInfoVO) => {
  return await request.put({ url: `/school/student-info/update`, data })
}

// 删除学生信息
export const deleteStudentInfo = async (id: number) => {
  return await request.delete({ url: `/school/student-info/delete?id=` + id })
}

// 导出学生信息 Excel
export const exportStudentInfo = async (params) => {
  return await request.download({ url: `/school/student-info/export-excel`, params })
}
