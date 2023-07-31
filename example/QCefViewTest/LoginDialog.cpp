#include "LoginDialog.h"
#include <QDebug>
#include <QDialog>
#include <QDialogButtonBox>
#include <QGridLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QStringList>

LoginDialog::LoginDialog(QWidget* parent)
  : QDialog(parent)
{
  setUpGUI();
  setWindowTitle(tr("User Login"));
  setModal(true);
}

LoginDialog::~LoginDialog(){}

void
LoginDialog::setUpGUI()
{
  editUsername = new QLineEdit(this);

  editPassword = new QLineEdit(this);
  editPassword->setEchoMode(QLineEdit::Password);

  labelUsername = new QLabel(this);
  labelUsername->setText(tr("Username"));
  labelUsername->setBuddy(editUsername);

  labelPassword = new QLabel(this);
  labelPassword->setText(tr("Password"));
  labelPassword->setBuddy(editPassword);

  buttons = new QDialogButtonBox(this);
  buttons->addButton(QDialogButtonBox::Ok);
  buttons->addButton(QDialogButtonBox::Cancel);
  buttons->button(QDialogButtonBox::Ok)->setText(tr("Login"));
  buttons->button(QDialogButtonBox::Cancel)->setText(tr("Abort"));

  connect(buttons->button(QDialogButtonBox::Cancel), SIGNAL(clicked()), this, SLOT(close()));
  connect(buttons->button(QDialogButtonBox::Ok), SIGNAL(clicked()), this, SLOT(slotAcceptLogin()));

  // set up the layout
  QGridLayout* formGridLayout = new QGridLayout(this);
  formGridLayout->addWidget(labelUsername, 0, 0);
  formGridLayout->addWidget(editUsername, 0, 1);
  formGridLayout->addWidget(labelPassword, 1, 0);
  formGridLayout->addWidget(editPassword, 1, 1);
  formGridLayout->addWidget(buttons, 2, 0, 1, 2);
  setLayout(formGridLayout);
}

void
LoginDialog::setUsername(QString const& username)
{
  editUsername->setText(username);
}

void
LoginDialog::setPassword(QString const& password)
{
  editPassword->setText(password);
}

void
LoginDialog::slotAcceptLogin()
{
  QString username = editUsername->text();
  QString password = editPassword->text();
  emit acceptLogin(username, password);
  close();
}