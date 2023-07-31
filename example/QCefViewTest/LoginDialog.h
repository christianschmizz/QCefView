#ifndef QCEFVIEW_LOGINDIALOG_H
#define QCEFVIEW_LOGINDIALOG_H
#pragma once

#include <QComboBox>
#include <QDialog>
#include <QDialogButtonBox>
#include <QLabel>
#include <QLineEdit>

class LoginDialog : public QDialog
{
  Q_OBJECT

public:
  LoginDialog(QWidget* parent = 0);
  ~LoginDialog();

  void setUsername(QString const& username);
  void setPassword(QString const& password);

signals:
  void acceptLogin(QString& username, QString& password);

public slots:
  void slotAcceptLogin();

private:
  QLabel* labelUsername;
  QLabel* labelPassword;

  QLineEdit* editUsername;
  QLineEdit* editPassword;

  QDialogButtonBox* buttons;

  void setUpGUI();
};

#endif // QCEFVIEW_LOGINDIALOG_H
